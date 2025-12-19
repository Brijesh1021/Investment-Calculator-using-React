export default function UserInput({onChange,defInput}){
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label >Initial Investment</label>
                    <input type="number" required value={defInput.initialinvestment} onChange={(event)=>onChange("initialinvestment",event.target.value)}/>
                </p>
                <p>
                    <label >Annual Investment</label>
                    <input type="number" required value={defInput.annualinvestment} onChange={(event)=>onChange("annualinvestment",event.target.value)}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label >Expected Duration</label>
                    <input type="number" required value={defInput.expectedduration} onChange={(event)=>onChange("expectedduration",event.target.value)}/>
                </p>
                <p>
                    <label >Duration</label>
                    <input type="number" required value={defInput.duration} onChange={(event)=>onChange("duration",event.target.value)}/>
                </p>
            </div>
        </section>
    )
}