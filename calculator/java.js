document.addEventListener('DOMContentLoaded', () => {
  const aEl = document.getElementById('num1');
  const bEl = document.getElementById('num2');
  const ops = document.getElementById('ops');
  let op = '-';
  const opDisplay = document.getElementById('op-display');
  const resEl = document.getElementById('result');

  function update() {
  const a = parseFloat(aEl.value);
  const b = parseFloat(bEl.value);

    const symbol = op === '*' ? '×' : op === '/' ? '÷' : op === '-' ? '−' : op === '+' ? '+' : '-';
    opDisplay.textContent = symbol;

    if (Number.isNaN(a) || Number.isNaN(b)) {
      resEl.value = '';
      resEl.placeholder = '-';
      return;
    }

    let r;
    if (op === '+') r = a + b;
    else if (op === '-') r = a - b;
    else if (op === '*') r = a * b;
    else if (op === '/') {
      if (b === 0) {
        resEl.value = 'Error';
        return;
      }
      r = a / b;
    }

    if (typeof r === 'number') {
      const formatted = Number.isInteger(r) ? String(r) : String(parseFloat(r.toFixed(8)));
      resEl.value = formatted;
    } else {
      resEl.value = String(r);
    }
  }

  aEl.addEventListener('input', update);
  bEl.addEventListener('input', update);

  ops.addEventListener('click', (e) => {
    const btn = e.target.closest('.op-btn');
    if (!btn) return;
    op = btn.dataset.op;
    document.querySelectorAll('.op-btn').forEach(b => b.classList.toggle('selected', b===btn));
    update();
  });

  update();
});
