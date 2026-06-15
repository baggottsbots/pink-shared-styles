// ===== TICKET PURCHASE BUTTON =====
    // Purpose: Start Stripe checkout for NetHub2026 ticket sales
    document.getElementById('buy').addEventListener('click', function () {
      window.__processPayment({
        amountCents: 29900,
        email: document.getElementById('email').value,
        productName: 'NetHub2026 Conference Ticket',
        productDescription: 'General admission ticket for NetHub2026',
        name: document.getElementById('name').value,
        quantity: 1
      });
    });