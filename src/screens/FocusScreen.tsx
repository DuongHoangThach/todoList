import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Spacer from '../components/Spacer';
import TextButton from '../components/TextButton';
import useTaskStore from '../hooks/use-task-store';

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Task = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  font-size: 32px;
  justify-content: center;
  padding: 45px;
`;

type Props = {};

const FocusScreen: React.FC<Props> = () => {
  const {
    focusedTask: task,
    shuffleFocusedTask,
    updateTaskCompletion,
  } = useTaskStore();
  const handleMarkCompleted = () => {
    if (task) updateTaskCompletion(task.id, true);
  };

  return task ? (
    <Container>
      <Task>{task.label}</Task>
      <Button onClick={handleMarkCompleted}>Đánh dấu hoàn thành✅✅✅</Button>
      <Spacer height={45} />
      <TextButton onClick={shuffleFocusedTask}>
        Không hoàn thành🤕🤕🤕
      </TextButton>
    </Container>
  ) : (
    <div>Nhiệm vụ hoàn thành!!!😊😊😊</div>
  );
};

export default FocusScreen;
