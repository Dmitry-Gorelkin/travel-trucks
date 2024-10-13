import styled from 'styled-components';

export const TrukCategoriesListContainer = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 8px;
`;

export const TrukCategoriesListItem = styled.li`
  display: flex;
  gap: 8px;

  padding: 12px 18px;

  border-radius: 100px;

  background-color: ${p => p.theme.colors.badges};
`;

export const TrukCategoriesListIcon = styled.svg`
  display: block;
  width: 20px;
  height: 20px;
`;

export const TrukCategoriesListText = styled.span`
  display: block;

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  text-transform: capitalize;

  color: ${p => p.theme.colors.main};
`;
