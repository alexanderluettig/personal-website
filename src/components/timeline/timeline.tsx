import { time } from 'console';
import styles from './timeline.module.css';

interface TimelineProps {}

const timeLineElements = [
    { title: '2017', text: ['- Finished A-Levels', '- Started studying math'] },
    { title: '2018', text: ['- Switched major from math to computer science'] },
    {
        title: '2019-2020',
        text: ['- Worked as a software tester (working student)'],
    },
    {
        title: 'End of 2020 - Start of 2021',
        text: [
            '- Worked as a working student to assist with project management tasks',
        ],
    },
    {
        title: 'End of 2021',
        text: ['- Started working as a software developer (working student)'],
    },
    {
        title: 'End of 2022',
        text: [
            '- Graduated with a bachelor of science in computer science',
            '- Started working as a software developer (fulltime at SparePartsNow)',
        ],
    },
];

const Timeline: React.FC<TimelineProps> = () => {
    return (
        <div className="w-[40%] h-full flex flex-col overflow-hidden overflow-y-auto">
            {timeLineElements.reverse().map((element, index) => {
                return (
                    <div key={index} className="flex flex-row">
                        <div className={styles.timelineMiddle}>
                            <div className={styles.timelineCircle}></div>
                        </div>
                        <div
                            className={`${styles.timelineComponent} ${styles.timelineContent}`}
                        >
                            <h3>{element.title}</h3>
                            <div>
                                {element.text.map((e, i) => (
                                    <p key={i}>{e}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;
