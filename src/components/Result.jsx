import { useState } from "react";
import { calculateInvestmentResults,formatter } from "../util/investment";

export default function Result({defInputs}){
    const results=calculateInvestmentResults(defInputs);
    const initialInvestment=results[0].valueEndOfYear-results[0].interest-results[0].annualInvestment;
    console.log(results);
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Years</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Investment</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((vals)=>{
                    let totalInterest=vals.valueEndOfYear-vals.annualInvestment * vals.year-initialInvestment;
                    let totalCapital=vals.valueEndOfYear-totalInterest;
                    return <tr key={vals.year}>
                        <td>{vals.year}</td>
                        <td>{formatter.format(vals.valueEndOfYear)}</td>
                        <td>{formatter.format(vals.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{totalCapital}</td>
                    </tr>
                })}
            </tbody>
        </table>
        
    )
}