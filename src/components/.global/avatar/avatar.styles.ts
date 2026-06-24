import styled from 'styled-components';
import { pxToRem } from '../../../utils/pxToRem';

export const AvatarContainer = styled.img<{
  $size?: number;
  $borderColor?: string;
  $borderWidth?: number;
}>`
  width: ${({ $size = 70 }) => pxToRem($size)};
  height: ${({ $size = 70 }) => pxToRem($size)};
  object-fit: cover;
`;
