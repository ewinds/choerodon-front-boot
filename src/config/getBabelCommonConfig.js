import { tmpdir } from 'os';
import context from '../bin/common/context';

export default function babel(mode, env) {
  const { choerodonConfig } = context;
  return choerodonConfig.babelConfig({
    presets: [
      'react',
      [
        'es2015',
      ],
      'stage-1',
    ],
    plugins: [
      'transform-async-to-generator',
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-runtime',
      'lodash',
      [
        'import',
        [
          {
            libraryName: 'choerodon-ui',
            style: true,
          },
          {
            libraryName: 'choerodon-ui/pro',
            style: true,
          },
          {
            libraryName: 'antd',
            style: true,
          },
        ],
      ],

    ],
  }, mode, env);
}
