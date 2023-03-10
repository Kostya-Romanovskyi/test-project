import { useState } from "react";
import FirstStatistics from "./components-dota/FirstStatistics/FirstStatistics";
import EnterMmr from "./components-dota/EnterMmr/EnterMmr";
import ChooseHero from "./components-dota/ChooseHero/ChooseHero";

const DotaStatistics = () => {
    const [kill, setkill] = useState(0)
    const [death, setdeath] = useState(0)
    const [assist, setassist] = useState(0)
    const [initialMmr, setinitialmmr] = useState('...')
    const [mmr, setmmr] = useState('...')
    const [win, setWin] = useState(0)
    const [totalKill, settotalKill] = useState(0)
    const [totalDeath, setTotalDeath] = useState(0)
    const [totalAssist, setTotalAssist] = useState(0)


    const firstMmr = (firstValue) => {
        setinitialmmr(firstValue)
        setmmr(firstValue)
    }


    return (
        <>
            <FirstStatistics startMmr={initialMmr} mmrNow={mmr} />
            <EnterMmr firstValue={firstMmr} mmrNow={setmmr} />
            <ChooseHero />
        </>
    )
}

export default DotaStatistics;