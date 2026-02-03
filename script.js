document.getElementById('feedbackForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const rating = document.querySelector('input[name="rating"]:checked').value;

    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    try {
        const response = await fetch('http://localhost:5000/api/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message, rating })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.errors?.[0]?.msg || 'Submission failed');
        }

        alert('Feedback submitted successfully!');
        document.getElementById('feedbackForm').reset();

    } catch (error) {
        alert('Error: ' + error.message);
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
});