import React from 'react';

import { ProgressContent, ProgressStrong, ProgressWeak } from './styles';

interface ISkillBar {
  value: number;
}

const SkillBar: React.FC<ISkillBar> = ({ value }) => {
  return (
    <ProgressContent>
      {new Array(43).fill('').map((p, index) => {
        const power = value * 0.4;
        const type = index <= power;

        if (index === power) {
          return <ProgressStrong />;
        } else {
          return (
            <ProgressWeak
              style={
                type
                  ? {
                      width: 1,
                      height: 15,
                      backgroundColor: 'white',
                    }
                  : {
                      width: 1,
                      height: 15,
                      backgroundColor: 'gray',
                    }
              }
            />
          );
        }
      })}
    </ProgressContent>
  );
};

export default SkillBar;
