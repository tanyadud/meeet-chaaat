import React, {useRef} from 'react';
import Arrow from '../../common/icons/mdi_arrow_drop_down.png'
import { Container, InputText, Icon, DropdownContainer, DropdownItem, DropdownList } from './Dropdown.styles';
import PropTypes from 'prop-types';

const Dropdown = ({ options, value, placeholder, isOpen, onSelect, onClickHandler }) => {
  const dropdownEl = useRef(null);

  const oninputClick = (e) => {
    e.stopPropagation();
    onClickHandler(e)
  };

  const onSelectItem = (e, opt) => {
    e.stopPropagation();
    onSelect(opt);
  };

  return (
    <Container>
      <div style={{ cursor: 'pointer' }} onClick={oninputClick}>
        <InputText style={{ borderBottomRightRadius: isOpen ? 0 : 10, borderBottomLeftRadius: isOpen ? 0 : 10 }}
                   type="text" value={value}
                   placeholder={placeholder} readOnly/>
        <Icon src={Arrow} style={{ transform: isOpen && 'rotate(180deg)' }} alt=""/>
      </div>
      {
        isOpen && (
          <DropdownContainer ref={dropdownEl}>
            <DropdownList>
              {
                options.map(opt => (
                  <DropdownItem className="option" key={opt} onClick={(e) => onSelectItem(e, opt)}>{opt}</DropdownItem>
                ))
              }
            </DropdownList>
          </DropdownContainer>
        )
      }
    </Container>
  )
};

Dropdown.propTypes = {
  options: PropTypes.array,
  isOpen: PropTypes.bool,
  value: PropTypes.string,
  onSelect: PropTypes.func,
  onClickHandler: PropTypes.func,
  placeholder: PropTypes.string
};

export default Dropdown;
