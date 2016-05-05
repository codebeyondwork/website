var PV = {
    form: document.getElementById('future-value'),
    principal: document.getElementById('initial-value'),
    monthlyContr: document.getElementById('monthly-contributions'),
    interest: document.getElementById('interest-rate'),
    years: document.getElementById('years')
};

PV.form.addEventListener('submit', getFutureValue);

function getFutureValue(e)
{
    e.preventDefault();

    var p = PV.principal.value,
        a = (12 * PV.monthlyContr.value),
        i = ((PV.interest.value / 100) / 12),
        t = PV.years.value,
        e = 2.71828; // Euler's number

    // Value without monthly contributions
    var fv = p * Math.pow(e, ((PV.interest.value / 100) * t));
    console.log('future value', fv);
}
