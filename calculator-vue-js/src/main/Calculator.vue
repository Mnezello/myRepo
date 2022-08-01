<template>
    <div class="calculator">
        <Display :value="displayValue" />
        <Button label="AC" @on-my-click="clearMemory" />
        <Button label="+/-" @on-my-click="setOperation" />
        <Button label="%" @on-my-click="setOperation" />
        <Button label="/" operation @on-my-click="setOperation"/>
        <Button label="7" @on-my-click="addDigit" />
        <Button label="8" @on-my-click="addDigit" />
        <Button label="9" @on-my-click="addDigit" />
        <Button label="x" operation @on-my-click="setOperation" />
        <Button label="4" @on-my-click="addDigit" />
        <Button label="5" @on-my-click="addDigit" />
        <Button label="6" @on-my-click="addDigit" />
        <Button label="-" operation @on-my-click="setOperation" />
        <Button label="1" @on-my-click="addDigit" />
        <Button label="2" @on-my-click="addDigit" />
        <Button label="3" @on-my-click="addDigit" />
        <Button label="+" operation @on-my-click="setOperation" />
        <Button label="0" double @on-my-click="addDigit" />
        <Button label="." @on-my-click="addDigit" />
        <Button label="=" operation @on-my-click="setOperation" />
    </div>
</template>

<script>
import Display from "../components/Display"
import Button from "../components/Button"

export default {
    data: function() {
        return{
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        }
    },
    components: { Display, Button },
    methods: {
        clearMemory() {
           Object.assign(this.$data, this.$options.data())
        },
        setOperation(operation) {
           if (this.current === 0) {
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
           } else {
                const equals = operation === "="
                const currentOperation = this.operation

                const values = this.values

                switch (currentOperation) {
                    case "/":
                        values[0] /= values[1]
                        values[0] = parseFloat(values[0].toFixed(3))
                        break
                    case "x":
                        values[0] *= values[1]
                        values[0] = parseFloat(values[0].toFixed(3))
                        break
                    case "+":
                        values[0] += values[1]
                        values[0] = parseFloat(values[0].toFixed(3))
                        break
                    case "-":
                        values[0] -= values[1]
                        values[0] = parseFloat(values[0].toFixed(3))
                        break
                    case "%":
                        values[0] /= 100
                        values[0] = parseFloat(values[0].toFixed(3))
                        break
                    case "+/-":
                        values[0] *= -1
                        values[0] = parseFloat(values[0].toFixed(3))
                        break
                    default:                  
                }

               this.values[1] = 0

               this.displayValue = this.values[0]
               this.operation = equals ? null : operation
               this.current = equals ? 0 : 1
               this.clearDisplay = !equals
           }
        },
        addDigit(n) {
            if (n === "." && this.displayValue.includes(".")) {
                return
            }

            const clearDisplay = this.displayValue === "0" || this.clearDisplay
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n
            this.displayValue = displayValue
            this.clearDisplay = false

            if (n !== ".") {
                const i = this.current
                const newValue = parseFloat(displayValue)
                this.values[i] = newValue
            }
        }
    }
}
</script>

<style>
    .calculator {
        height: 320px;
        width: 235px;
        border-radius: 5px;
        overflow: hidden;
        display: grid;
        grid-template-columns: repeat(4,25%);
        grid-template-rows: 1fr 48px 48px 48px 48px 48px;
        margin: 0px 0px 10px 0px;
    }
</style>