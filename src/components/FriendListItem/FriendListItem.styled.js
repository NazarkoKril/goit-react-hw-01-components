import styled from '@emotion/styled';

export const ListItem1 = styled.li`
    display: flex;
    align-items: center;

    gap: 0.5rem;
`;

export const Status1 = styled.span`
    width: 1rem;
    height: 1rem;

    border-radius: 50%;

    background-color: ${({ status }) => {
        switch (status) {
            case true:
                return 'green'
            case false:
                return 'red'
            default:
                return 'grey'
        }
    }}
`; 