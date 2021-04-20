import React from 'react';
import styled from 'styled-components';
import Gallery from './subcomponents/Gallery';
import Information from './subcomponents/Information';
import StylesList from './subcomponents/StylesList';
import Cart from './subcomponents/Cart';
import Description from './subcomponents/Description';
import InfoExample from './product_info_example.json';
import StylesExample from './product_styles_example.json';

const OverviewStyle = styled.section`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const BottomSection = styled.div`
  /* flex-direction: row; */
`;

const LeftSection = styled.div`
  flex-direction: column;
  order: 1;
  flex-basis: 60%;
  flex-grow: 1; /* REEVALUATE */
`;

const RightSection = styled.div`
  flex-direction: column;
  order: 2;
  flex-basis: 40%;
`;

const Subcomponent = styled.div`
  background: ${(props) => props.background};
  order: ${(props) => props.order};
  padding: 10px 0;
`;

function Overview() {
  // JS here

  return (
    <>
      <div data-testid="Overview">
        <OverviewStyle>

          <TopSection>
            <LeftSection>
              {/* Image Gallery */}
              <Subcomponent /* background="orange" */ order="1">
                <Gallery styles={StylesExample} />
              </Subcomponent>
            </LeftSection>

            <RightSection>
              {/* Product Information */}
              <Subcomponent /* background="cornflowerblue" */ order="1">
                <Information infoList={InfoExample} />
              </Subcomponent>

              {/* Style Selector */}
              <Subcomponent /* background="yellow" */ order="2">
                <StylesList stylesList={StylesExample} />
              </Subcomponent>

              {/* Add to Cart */}
              <Subcomponent /* background="orange" */ order="3">
                <Cart />
              </Subcomponent>
            </RightSection>
          </TopSection>

          {/* Product Description */}
          <BottomSection>
            <Subcomponent /* background="cornflowerblue" */ order="3">
              <Description descExample={InfoExample} />
            </Subcomponent>
          </BottomSection>

        </OverviewStyle>
        <br />
      </div>
    </>
  );
}

export default Overview;
