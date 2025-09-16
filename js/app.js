class Calculator {
    constructor(num1, num2, operation, resultOutput, btn) {
        this.firstNum = num1
        this.secondNum = num2
        this.operation = operation
        this.resultOutput = resultOutput
        this.btn = btn
    }

    add(a, b) {
        return a + b
    }

    subtract(a, b) {
        return a - b
    }

    multiply(a, b) {
        return a * b
    }

    divide(a, b) {
        if (b === 0) {
            return "Error: Cannot divide by 0"
        }
        return a / b
    }

    compute() {
        const num1 = parseFloat(this.firstNum.value)
        const num2 = parseFloat(this.secondNum.value)

        switch (this.operation.value) {
            case "add":
                return this.add(num1, num2)
            case "subtract":
                return this.subtract(num1, num2)
            case "multiply":
                return this.multiply(num1, num2)
            case "divide":
                return this.divide(num1, num2)
            default:
                return "Invalid operation"
        }
    }

    results() {
        this.btn.addEventListener('click', () => {
            const result = this.compute()
            this.resultOutput.textContent = result
        })
    }
}

const firstNum = document.getElementById('num1')
const secondNum = document.getElementById('num2')
const operation = document.getElementById('operation')
const result = document.getElementById('result')
const btn = document.getElementById('calculateBtn')

const calc = new Calculator(firstNum, secondNum, operation, result, btn)

calc.results()