import { RouteEnum } from '../../../../src/utils/enums/RouteEnum';

describe('RouteEnum', () => {
  it('should contain correct routes', () => {
    expect(RouteEnum).toEqual({
      ABOUT_US: '/sobre-nos',
      INITIATIVES: '/nossas-iniciativas',
      newsAndEvents: '/#noticias-eventos',
      JOIN_US: 'https://stars.soujunior.tech/',
      SUPPORT_US: '/seja-um-apoiador',
      DESIGN: '/design',
    });
  });
});
