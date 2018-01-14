import Home from 'page/Home';
import Skills from 'page/Skills';
import WebDevelopment from 'page/WebDevelopment';
import MediaProducties from "page/MediaProducties";
import SocialMedia from 'page/SocialMedia';
import Werkervaring from 'page/Werkervaring';
import TheGuide from 'page/TheGuide';
import FlashProducties from 'page/FlashProducties';
import LowlandsTv from 'page/LowlandsTv';
import Radio3FM from 'page/Radio3FM';
import Studie from 'page/Studie';
import Documentaire from 'page/Documentaire';
import Contact from 'page/Contact';
import TheMakingOfMedia from 'page/TheMakingOfMedia';

import PagePaths from 'data/enum/PagePaths';
import PageNames from 'data/enum/PageNames';


export default [
  {
    path: PagePaths.HOME,
    component: Home,
    name: PageNames.HOME,
    props: { componentId: PageNames.HOME },
  },
  {
    path: PagePaths.SKILLS,
    component: Skills,
    name: PageNames.SKILLS,
    props: { componentId: PageNames.SKILLS },
  },
  {
    path: PagePaths.WEBDEVELOPMENT,
    component: WebDevelopment,
    name: PageNames.WEBDEVELOPMENT,
    props: { componentId: PageNames.WEBDEVELOPMENT },
  },
  {
    path: PagePaths.MEDIAPRODUCTIES,
    component: MediaProducties,
    name: PageNames.MEDIAPRODUCTIES,
    props: { componentId: PageNames.MEDIAPRODUCTIES },
  },
  {
    path: PagePaths.SOCIALMEDIA,
    component: SocialMedia,
    name: PageNames.SOCIALMEDIA,
    props: { componentId: PageNames.SOCIALMEDIA },
  },
  {
    path: PagePaths.WERKERVARING,
    component: Werkervaring,
    name: PageNames.WERKERVARING,
    props: { componentId: PageNames.WERKERVARING },
  },
  {
    path: PagePaths.THEGUIDE,
    component: TheGuide,
    name: PageNames.THEGUIDE,
    props: { componentId: PageNames.THEGUIDE },
  },
  {
    path: PagePaths.FLASHPRODUCTIES,
    component: FlashProducties,
    name: PageNames.FLASHPRODUCTIES,
    props: { componentId: PageNames.FLASHPRODUCTIES },
  },
  {
    path: PagePaths.LOWLANDSTV,
    component: LowlandsTv,
    name: PageNames.LOWLANDSTV,
    props: { componentId: PageNames.LOWLANDSTV },
  },
  {
    path: PagePaths.RADIO3FM,
    component: Radio3FM,
    name: PageNames.RADIO3FM,
    props: { componentId: PageNames.RADIO3FM },
  },
  {
    path: PagePaths.STUDIES,
    component: Studie,
    name: PageNames.STUDIES,
    props: { componentId: PageNames.STUDIES },
  },
  {
    path: PagePaths.DOCUMENTAIRE,
    component: Documentaire,
    name: PageNames.DOCUMENTAIRE,
    props: { componentId: PageNames.DOCUMENTAIRE },
  },
  {
    path: PagePaths.CONTACT,
    component: Contact,
    name: PageNames.CONTACT,
    props: { componentId: PageNames.CONTACT },
  },
  {
    path: PagePaths.THEMAKINGOFMEDIA,
    component: TheMakingOfMedia,
    name: PageNames.THEMAKINGOFMEDIA,
    props: { componentId: PageNames.THEMAKINGOFMEDIA },
  },
];
