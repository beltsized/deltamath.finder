javascript: try {
    const task = problem.qlinesCopy[0];
    const base = task.line;
    
    if (!base) alert("No equation base found.");
    else {
        const equation = base.replaceAll("\\big", "");

        prompt("Here's the problem:", equation);
    }
} catch {
    alert("No equation found.");
}; void 0;
