import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";

export default function Result({defInput}){
    const results=calculateInvestmentResults(defInput);
    console.log(results);
    return <p>Results Page</p>
}