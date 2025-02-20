import Hero from "../../components/shared/Hero";
import FeaturedPrograms from "../../components/shared/Program";
import Quotes from "../../components/shared/Quotes";
import StatsSection from "../../components/shared/TotalEnroll";
import VideoSection from "../../components/shared/Video";

export default function Home() {
    return (
        <>
            <Hero />
            <StatsSection />
            <FeaturedPrograms />
            <Quotes />
            <VideoSection />
        </>
    )
}