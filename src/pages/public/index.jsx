import Hero from "../../components/shared/Hero";
import Programs from "../../components/shared/Program";
import Quotes from "../../components/shared/Quote";
import Statistic from "../../components/shared/Statistic";
import Video from "../../components/shared/Video";

export default function Home() {
    return (
        <>
            <Hero />
            <Statistic />
            <Programs />
            <Quotes />
            <Video />
        </>
    )
}