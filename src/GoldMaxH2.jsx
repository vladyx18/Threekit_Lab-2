import React from 'react';
import {
  Player,
  PortalToElement,
  Share,
  Snapshots,
  ProductName,
  AwaitThreekitLoad,
  useAttribute,
} from '@threekit-tools/treble';

import Tiles from './components/Tiles';
import Accordion from './components/Accordion';
import ColorSwatch from './components/ColorSwatch';

const { AccordionItem } = Accordion;

const GoldMaxH2 = () => {
  const [sideDrawerAttr] = useAttribute('Side Drawers');
  const [topDrawerAttr] = useAttribute('Top Drawers');
  const [extraDrawerAttr] = useAttribute('Extra Drawers');

  if (!sideDrawerAttr || !topDrawerAttr) return <></>;
  return (
    <div className="animate__animated animate__fadeIn">
      <div className="tk-treble-player">
        <Player>
          <Player.TopRightWidgets>
            <Share className="mt-[60px]" type="primary" />
            <Snapshots
              className="mt-[60px]"
              type="primary"
              cameras={[undefined, 'birdsey-camera']}
              config={{ format: 'jpeg' }}
            />
          </Player.TopRightWidgets>
        </Player>
      </div>
      <AwaitThreekitLoad>
        <PortalToElement to="tk-treble-form" strict={true}>
          <div className="pt-[80px]">
            <ProductName title="Gold Max H2" />
            <Accordion>
              <AccordionItem label="Side Drawers">
                <Tiles attribute="Side Drawers" />
              </AccordionItem>
            </Accordion>
            {sideDrawerAttr.value === 'Yes' ? (
              <Accordion>
                <AccordionItem label="Side Drawers Color">
                  <ColorSwatch attribute="Side Drawers Color" />
                </AccordionItem>
              </Accordion>
            ) : (
              <></>
            )}
            <Accordion>
              <AccordionItem label="Top Drawers">
                <Tiles attribute="Top Drawers" />
              </AccordionItem>
            </Accordion>
            {topDrawerAttr.value === 'Yes' ? (
              <Accordion>
                <AccordionItem label="Top Drawers Color">
                  <ColorSwatch attribute="Top Drawers Color" />
                </AccordionItem>
              </Accordion>
            ) : (
              <></>
            )}
            <Accordion>
              <AccordionItem label="Bottom Drawers Color">
                <ColorSwatch attribute="Bottom Drawers Color" />
              </AccordionItem>
            </Accordion>
            {sideDrawerAttr.value === 'Yes' ? (
              <>
                <Accordion>
                  <AccordionItem label="Extra Drawers">
                    <Tiles attribute="Extra Drawers" />
                  </AccordionItem>
                </Accordion>
                {extraDrawerAttr.value === 'None' ? (
                  <></>
                ) : (
                  <Accordion>
                    <AccordionItem label="Extra Drawers Color">
                      <ColorSwatch attribute="Extra Drawers Color" />
                    </AccordionItem>
                  </Accordion>
                )}
              </>
            ) : (
              <></>
            )}
            <Accordion>
              <AccordionItem label="Handles">
                <Tiles attribute="Handles" />
              </AccordionItem>
            </Accordion>
            <Accordion>
              <AccordionItem label="Sound System">
                <Tiles attribute="Sound System" />
              </AccordionItem>
            </Accordion>
            <Accordion>
              <AccordionItem label="TV">
                <Tiles attribute="TV" />
              </AccordionItem>
            </Accordion>
          </div>
        </PortalToElement>
      </AwaitThreekitLoad>
    </div>
  );
};

export default GoldMaxH2;
