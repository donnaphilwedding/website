import { FC } from 'react';
import { Card } from '../components/card/Card';
import { PageContainer } from '../components/PageContainer';
import { PageTitleCard } from '../components/PageTitleCard';
import { RecommendationSection } from '../components/RecommendationSection';

export const Recommendations: FC = () => {
  return (
    <PageContainer pageTitle="Recommendations">
      <div className="flex flex-col items-center gap-5 py-10">
        <PageTitleCard name="Recommendations" className="md:hidden" />
        <div className="flex flex-col gap-10 md:gap-5 w-full">
          <Card title="Drinks and Snacks" collapsible>
            <RecommendationSection
              title="Knoops"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8524675455014!2d-1.258559484354357!3d51.754021279676415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c7fbe10d59ef%3A0xc38a836867b5c330!2sKnoops%20Chocolate!5e0!3m2!1sen!2suk!4v1676317014607!5m2!1sen!2suk"
            >
              Knoops is a hot chocolate place which opened in the last couple of years. There's a lot of different
              choices! Really good if it's a little bit cold outside.
            </RecommendationSection>
            <RecommendationSection
              title="Moo Moos"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.9433977997764!2d-1.259020184221007!3d51.75235857967615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6af9898c389%3A0x568b62147e5f60e4!2sMoo-Moo&#39;s!5e0!3m2!1sen!2suk!4v1676318669087!5m2!1sen!2suk"
            >
              This was our favourite milkshake place in first year. They have a huge list of different things that
              they'll blend into a milkshake.
            </RecommendationSection>
            <RecommendationSection
              title="G&Ds Ice Cream"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.0966352087835!2d-1.2589199843545231!3d51.74955647967567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6b01e8d119f%3A0x7d856cbc5bfdf4b9!2sGeorge%20%26%20Danver!5e0!3m2!1sen!2suk!4v1676319028170!5m2!1sen!2suk"
            >
              Cute little ice cream place. They make really good triple layer ice cream cakes- Donna often gets one for
              her birthday.
            </RecommendationSection>
          </Card>
          <Card title="Quick Meals" collapsible>
            <RecommendationSection
              title="Sasi's Thai"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.9417825989913!2d-1.2612018689430995!3d51.752388114670175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6af97d12869%3A0x9c86cd232986a42b!2sSasi&#39;s%20Thai!5e0!3m2!1sen!2suk!4v1676319439837!5m2!1sen!2suk"
            >
              Small Thai place that serves a few different home made curries and stir fries. Great for a quick and easy
              lunch.
            </RecommendationSection>
            <RecommendationSection
              title="Pie Minister"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.913560086715!2d-1.2590281843544116!3d51.75290417967627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6af9898c389%3A0x4347fe55458ed7b!2sPieminister!5e0!3m2!1sen!2suk!4v1676319613116!5m2!1sen!2suk"
            >
              Amazing pies! It can be a bit cramped and difficult to get a table, but it's worth it.
            </RecommendationSection>
            <RecommendationSection
              title="Taylors' Sandwiches"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4939.877264730341!2d-1.256496721769887!3d51.7524457187044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6ada7c5ea43%3A0xa93b482e2b442294!2sTaylors%2058%20High%20Street!5e0!3m2!1sen!2suk!4v1676319750580!5m2!1sen!2suk"
            >
              Our favourite sandwich shop in Oxford. There's actually quite a few branches throughout the city which
              serve different things. Some of them do pastas, salads and stews as well.
            </RecommendationSection>
          </Card>
          <Card title="Restaurants" collapsible>
            <RecommendationSection
              title="Pierre Victoire"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.6027117355575!2d-1.263954784354131!3d51.75858797967717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a701273113%3A0x6e9c6b5463ca5051!2sPierre%20Victoire!5e0!3m2!1sen!2suk!4v1676319956843!5m2!1sen!2suk"
            >
              Little French bistro in a nice area of North Oxford. The university maths society would go for dinner here
              with their guest speaker each week. Has a lunch menu on a Saturday which is good value.
            </RecommendationSection>
            <RecommendationSection
              title="Dirty Bones"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2470.1250934811314!2d-1.2638414843545436!3d51.749036079675534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6bb179d2e1d%3A0x5d741730cf4bece0!2sDirty%20Bones%20Oxford!5e0!3m2!1sen!2suk!4v1676320206731!5m2!1sen!2suk"
            >
              American comfort food! Part of a new shopping center which was built a few years ago, with lots of
              restaurants and bars on the roof. There's a few other interesting places nearby.
            </RecommendationSection>
            <RecommendationSection
              title="The Gardener's Arms"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.3745110932205!2d-1.2708847651123327!3d51.762760300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c41e43fd21db%3A0x5b4d9e5a71171e5f!2sThe%20Gardeners%20Arms!5e0!3m2!1sen!2suk!4v1676320410431!5m2!1sen!2suk"
            >
              Traditional English pub which serves a 100% vegetarian menu.
            </RecommendationSection>
          </Card>
          <Card title="Things To Do" collapsible>
            <RecommendationSection
              title="Oxford Botanic Gardens"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1257879.1960042487!2d-2.3702992936752993!3d51.99238442891093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6b29e292543%3A0x561e52e8d4b04f75!2sOxford%20Botanic%20Garden!5e0!3m2!1sen!2suk!4v1676320970046!5m2!1sen!2suk"
            >
              The Oxford Botanic Gardens are just a few minutes' walk from the hotel.
            </RecommendationSection>
            <RecommendationSection
              title="Ashmolean Museum"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.7755394296173!2d-1.264557168942008!3d51.75542791467234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a42d5fabb7%3A0xe88ca2375e205743!2sAshmolean%20Museum!5e0!3m2!1sen!2suk!4v1676321972443!5m2!1sen!2suk"
            >
              Like a mini version of the British Museum.
            </RecommendationSection>
            <RecommendationSection
              title="Punting"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.9970077761122!2d-1.2486242843544653!3d51.751378279675976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6adcf3c9af1%3A0xcb00a0bd0b047829!2sOxford%20Punting!5e0!3m2!1sen!2suk!4v1676321304197!5m2!1sen!2suk"
            >
              There's a punt station just across the road from the gardens. You can rent a punt for up to 5 people for
              around £30.
            </RecommendationSection>
            <RecommendationSection
              title="Blackwell's Bookstore"
              mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4939.635904193085!2d-1.2642862302246276!3d51.7546524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6af21c05bcb%3A0x998ba5c1ca8ff22f!2sBlackwell&#39;s%20Bookshop!5e0!3m2!1sen!2suk!4v1676321826074!5m2!1sen!2suk"
            >
              Phil's favourite book store. It has a massive basement where all the science books are kept. Across the
              road, there's a second smaller bookstore which specialises in comics, fantasy novels and board games.
            </RecommendationSection>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
};
