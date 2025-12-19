export default function UserInput({onChange,defInputs}){
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label >Initial Investment</label>
                    <input type="number" required value={defInputs.initialInvestment} onChange={(event)=>onChange("initialInvestment",event.target.value)}/>
                </p>
                <p>
                    <label >Annual Investment</label>
                    <input type="number" required value={defInputs.annualInvestment} onChange={(event)=>onChange("annualInvestment",event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label >Expected Duration</label>
                    <input type="number" required value={defInputs.expectedReturn} onChange={(event)=>onChange("expectedReturn",event.target.value)}/>
                </p>
                <p>
                    <label >Duration</label>
                    <input type="number" required value={defInputs.duration} onChange={(event)=>onChange("duration",event.target.value)}/>
                </p>
            </div>
        </section>
    )
}