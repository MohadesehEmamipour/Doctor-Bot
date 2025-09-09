async function askDMV(question) {
    const response = await fetch("https://huggingface.co/spaces/helloall/Meaw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: question })
    });
    const data = await response.json();
    return data.response;
}
