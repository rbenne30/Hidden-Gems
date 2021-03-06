async function deleteFormHandler(event) {
    event.preventDefault();
    console.log("delete begin")

    const id = window.location.toString().split("/") [
        window.location.toString().split("/").length - 1
    ];
    const response = await fetch(`/api/gem/${id}`, {
        method: "DELETE"
    });

    if (response.ok) {
        document.location.replace("/dashboard/");
    }
    else {
        alert(response.statusText);
    }
};

document.querySelector(".delete-gem-btn").addEventListener('click', deleteFormHandler);