import { AttModel } from './attmodel';

export const attList: AttModel[] = [
  { rid: 1, fk_user: 2, time: '2018-01-01 09:00:00', direct: 1, type: 1},
  { rid: 2, fk_user: 2, time: '2018-01-01 18:00:00', direct: 0, type: 1},
  { rid: 3, fk_user: 1, time: '2018-01-01 07:00:00', direct: 1, type: 1},
  { rid: 4, fk_user: 1, time: '2018-01-01 16:00:00', direct: 0, type: 1},
  { rid: 5, fk_user: 1, time: '2018-01-02 10:00:00', direct: 1, type: 1},
  { rid: 6, fk_user: 1, time: '2018-01-02 17:00:00', direct: 0, type: 1},
  { rid: 7, fk_user: 3, time: '2018-01-03 10:00:00', direct: 1, type: 1},
  { rid: 8, fk_user: 1, time: '2018-01-03 17:00:00', direct: 0, type: 1}
];
