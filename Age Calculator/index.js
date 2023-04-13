function calculateAge() {
    const dob = new Date(document.getElementById("dob").value);
    const now = new Date()
    const ageInms = now - dob
    const ageInYears = ageInms / (1000 * 60 * 60 * 24 * 365);
    const ageInMonths = ageInYears * 12;
    const ageInDays = ageInms / (1000 * 60 * 60 * 24)

    document.getElementById('disable').style.display = 'block'

    const years = document.getElementById('result_year')
    const Months = document.getElementById('result_month')
    const Days = document.getElementById('result_day')

    years.innerHTML = `you are ${ageInYears.toFixed(2)} years old`

    Months.innerHTML = `you are ${ageInMonths.toFixed(2)} Months old`

    Days.innerHTML = `you are ${ageInDays.toFixed(2)} Days old`

}
