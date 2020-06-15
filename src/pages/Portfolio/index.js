import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/VerticalWithAlternateImageAndText";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1 />
      <Footer />
    </AnimationRevealPage>
  );
};
