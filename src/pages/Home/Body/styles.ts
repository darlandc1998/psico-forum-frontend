import styled from 'styled-components';
import { Content } from '../../../components';

const BODY_BACKGROUND_IMAGE =
  'https://cutewallpaper.org/27/background-psychology-wallpaper/3234712634.jpg';

export const Container = styled(Content)`
  background: url(${BODY_BACKGROUND_IMAGE}) no-repeat center;
  background-size: cover;
  opacity: 0.4;
`;
