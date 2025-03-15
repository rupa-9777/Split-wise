// Step 1: Move to Step 2
document.getElementById("nextStep1").addEventListener("click", function () {
  const amount = document.getElementById("amount").value;
  const description = document.getElementById("description").value;
  const members = document.getElementById("members").value;

  if (!amount || !description || !members) {
    alert("Please fill all fields.");
    return;
  }

  // Hide Step 1 and Show Step 2
  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");

  // Generate Member Input Fields
  const memberInputs = document.getElementById("memberInputs");
  memberInputs.innerHTML = "";
  for (let i = 1; i <= members; i++) {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Member ${i} Name`;
    input.required = true;
    memberInputs.appendChild(input);
  }
});

// Step 2: Move to Step 3
document.getElementById("nextStep2").addEventListener("click", function () {
  const memberInputs = document.querySelectorAll("#memberInputs input");
  const memberNames = Array.from(memberInputs).map(input => input.value.trim());

  if (memberNames.some(name => !name)) {
    alert("Please fill all member names.");
    return;
  }

  // Hide Step 2 and Show Step 3
  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");

  // Calculate Split Amount
  const amount = parseFloat(document.getElementById("amount").value);
  const splitAmount = (amount / memberNames.length).toFixed(2);

  // Display Split Result
  const splitResult = document.getElementById("splitResult");
  splitResult.innerHTML = `
    <p><strong>Description:</strong> ${document.getElementById("description").value}</p>
    <p><strong>Total Amount:</strong> ₹${amount}</p>
    <p><strong>Split Amount per Member:</strong> ₹${splitAmount}</p>
    <p><strong>Members:</strong> ${memberNames.join(", ")}</p>
  `;
});

// Reset Form
document.getElementById("resetForm").addEventListener("click", function () {
  document.getElementById("step3").classList.add("hidden");
  document.getElementById("step1").classList.remove("hidden");
  document.getElementById("expenseForm").reset();
});
