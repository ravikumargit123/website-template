import React from 'react';
import './style.scss';

import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import HeroImage from '../../components/HeroImage/index';
import TwoColumnSection from '../../components/TwoColumnSection/index';
import SingleColumnSection from '../../components/SingleColumnSection/index';
import Divider from '../../components/Divider/index';
import Markdown from '../../components/Markdown/index';
import Image from '../../components/Image';
import GradientLink from '../../components/GradientLink';

const HomePage = ({ getText, getMedia }) => {
    return (
        <div className="HomePage">
            <HeroImage image={getMedia('homePageHeaderImage')}>
                <Image
                    className="HomePage--logo"
                    transformation={{ width: 400 }}
                    image={getMedia('homePageHeroCtaLogo')}
                />
                <Divider size="sm" />
                <h2 className="HomePage--title">{getText('homePageHeroCtaSubtitle')}</h2>
                <Divider size="md" />
                <GradientLink href="http://google.com" text="Apply now" />
            </HeroImage>
            <SingleColumnSection title="Europe's leading hackathon is taking over Helsinki again." />
            <Divider size="lg" />
            <TwoColumnSection
                title="This is Junction."
                subtitle="Hackathon = The goal of a hackathon is to create usable software or hardware with the goal of creating a functioning product by the end of the event."
            >
                <Markdown source={getText('homePageIntroText')} />
            </TwoColumnSection>
            <Divider size="lg" />
            <SingleColumnSection title="Our Partners" subtitle="Check out some of our partners from previous years">
                <Markdown source={getText('homePageIntroText')} />
            </SingleColumnSection>
            <Divider size="lg" />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        getText: ContentSelectors.buildGetText(state),
        getMedia: ContentSelectors.buildGetMedia(state)
    };
};

export default connect(mapStateToProps)(HomePage);
