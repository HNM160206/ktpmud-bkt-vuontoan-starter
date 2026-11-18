const fs = require("fs");
const path = require("path");

const seedPath = path.join(__dirname, "../data/seed.json");
const backupPath = seedPath + ".bak";

const data = JSON.parse(fs.readFileSync(seedPath, "utf8"));

function calculateRange(result) {
    return `${Math.ceil(result * 0.8)}-${Math.floor(result * 1.2)}`;
}

function getResult(prompt) {
    const match = prompt.match(
        /(\d+(?:\.\d+)?)\s*[×x*]\s*(\d+(?:\.\d+)?)/i
    );

    if (match) {
        return Number(match[1]) * Number(match[2]);
    }

    const division = prompt.match(
        /(\d+(?:\.\d+)?)\s*[÷/:]\s*(\d+(?:\.\d+)?)/i
    );

    if (division) {
        const a = Number(division[1]);
        const b = Number(division[2]);

        if (b === 0) return null;

        return a / b;
    }

    return null;
}

const changes = [];

function walk(obj) {
    if (Array.isArray(obj)) {
        obj.forEach(walk);
        return;
    }

    if (!obj || typeof obj !== "object") return;

    if (obj.type === "estimate" && obj.prompt) {
        const result = getResult(obj.prompt);

        if (result !== null) {
            const newRange = calculateRange(result);

            for (const key of ["correctAnswer", "correct_answer"]) {
                if (
                    typeof obj[key] === "string" &&
                    /^\d+\s*-\s*\d+$/.test(obj[key])
                ) {
                    if (obj[key] !== newRange) {
                        changes.push({
                            prompt: obj.prompt,
                            old: obj[key],
                            new: newRange
                        });

                        obj[key] = newRange;
                    }
                }
            }
        }
    }

    Object.values(obj).forEach(walk);
}

walk(data);

console.log("Các khoảng sẽ sửa:");

changes.forEach((change, index) => {
    console.log(
        `${index + 1}. ${change.prompt}: ` +
        `${change.old} -> ${change.new}`
    );
});

if (changes.length !== 20) {
    console.error(
        `\nDừng: dự kiến sửa 20 câu nhưng phát hiện ${changes.length} câu.`
    );
    console.error("Không ghi đè seed.json.");
    process.exit(1);
}

fs.copyFileSync(seedPath, backupPath);

fs.writeFileSync(
    seedPath,
    JSON.stringify(data, null, 2) + "\n",
    "utf8"
);

console.log("\nĐã cập nhật 20 khoảng dung sai.");
console.log("Backup:", backupPath);