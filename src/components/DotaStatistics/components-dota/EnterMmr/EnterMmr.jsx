const EnterMmr = ({ firstValue, mmrNow }) => {

    const getValue = (evt) => {
        evt.preventDefault()
        firstValue(evt.target.children[1].value)
        mmrNow(evt.target.children[1].value)
        evt.target.children[1].value = ''
    }


    return (
        <form onSubmit={getValue}>
            <label htmlFor="1"> </label>
            <input name='firstMmr' id="1" type="tel" />mmr <span>Enter your mmr</span>
            <button type="submit">button</button>
        </form>
    )
}
export default EnterMmr;