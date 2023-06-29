import { HomeSection, Title } from "./HomePage.styled";

export function HomePage() {
  return (
    <HomeSection>
      <Title>
        Welcome to our service{' '}
        <span role="img" aria-label="Иконка приветствия">
          💁‍♀️
        </span>
      </Title>
    </HomeSection>
  );
}
