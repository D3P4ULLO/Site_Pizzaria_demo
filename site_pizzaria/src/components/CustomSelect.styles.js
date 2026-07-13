import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  min-width: 220px;
`;

export const Trigger = styled.button`
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
  background: var(--color-bg);
  cursor: pointer;
  transition: var(--transition);
  text-align: left;
  position: relative;

  &::after {
    content: "▾";
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%)
      ${({ $open }) => ($open ? "rotate(180deg)" : "rotate(0)")};
    font-size: 14px;
    color: var(--color-text-muted);
    transition: var(--transition);
  }

  &:hover,
  &:focus {
    border-color: var(--color-primary-light);
    outline: none;
  }

  ${({ $open }) =>
    $open &&
    `
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(193, 39, 45, 0.1);
  `}
`;

export const Dropdown = styled.ul`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  background: var(--color-surface);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: 0 8px 24px var(--color-shadow-strong);
  list-style: none;
  padding: 6px 0;
  margin: 0;
  z-index: 50;
  overflow: hidden;
  animation: dropIn 0.2s ease;

  @keyframes dropIn {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Option = styled.li`
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--color-text);
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: var(--color-bg-alt);
    color: var(--color-primary);
  }

  ${({ $active }) =>
    $active &&
    `
    background: var(--color-primary);
    color: white;
    font-weight: 600;

    &:hover {
      background: var(--color-primary-dark);
      color: white;
    }
  `}
`;
