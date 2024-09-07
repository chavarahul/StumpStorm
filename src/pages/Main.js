import { Loader } from '../components/common/index';
import {Video,Hero,ScrollText,About,HorizontalScrollCarousel} from '../components/landing-components/index';


function MainPage() {
    return (
        <>
            <Loader />
            <Hero />
            <Video />
            <ScrollText />
            <About />
            <HorizontalScrollCarousel />
        </>
    );
}

export default MainPage;
