import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from '../../Card';
import Checkbox from '../Checkbox';
import { SelectCard, SelectStyle, Option } from './style';
import { buttonTypes } from '../../types';
import layoutContext from '../../Layout/layout-context';

function Select(props) {
  const layout = React.useContext(layoutContext);
  const [options, setOptions] = React.useState([...props.options]);
  const [opened, setOpened] = React.useState(false);
  const [placement, setPlacement] = React.useState('bottom');
  const [position, setPosition] = React.useState();

  const overlayRef = React.useRef();
  const targetRef = React.useRef();

  React.useEffect(() => {
    if (props.value) {
      const newOptions = [...options];
      for (const option of newOptions) {
        if (props.multiple) {
          option.selected = props.value.includes(option.value);
        } else {
          option.selected = props.value === option.value;
        }
      }
      setOptions(newOptions);
    }
  }, []);

  React.useEffect(
    () => {
      if (opened) {
        window.addEventListener('click', onClickHandle);
        positionHandle();
        window.addEventListener('resize', positionHandle);
        layout.addEventListener('scroll', positionHandle);
        if (props.eventListener) {
          document
            .querySelector(props.eventListener)
            .addEventListener('scroll', positionHandle);
        }
        return () => {
          window.removeEventListener('click', onClickHandle);

          window.removeEventListener('resize', positionHandle);
          layout.removeEventListener('scroll', positionHandle);

          if (props.eventListener) {
            document
              .querySelector(props.eventListener)
              .removeEventListener('scroll', positionHandle);
          }
        };
      }
    },
    [opened]
  );

  const positionHandle = () => {
    const target = targetRef.current.getBoundingClientRect();
    const overlay = overlayRef.current.getBoundingClientRect();

    const data = {
      placement: 'bottom',
      position: { top: 0, left: target.left, maxHeight: 'none' }
    };

    if (overlay.height > window.innerHeight - target.bottom) {
      if (overlay.height < target.top) {
        data.placement = 'top';
      } else {
        data.position.maxHeight = window.innerHeight - target.bottom;
      }
    }
    data.position.top =
      data.placement === 'bottom' ? target.bottom : target.top - overlay.height;

    setPosition(data.position);
    setPlacement(data.placement);
  };

  const onClickHandle = () => {
    setOpened(false);
  };

  const onSelectMultiple = i => {
    const newOptions = [...options];
    newOptions[i].selected = !newOptions[i].selected;
    setOptions(newOptions);
    const selectedView = [];
    for (const option of newOptions) {
      option.selected && selectedView.push(option.value);
    }
    typeof props.onChange === 'function' && props.onChange(selectedView);
  };

  const onSelectHandle = i => {
    const newOptions = [...options];
    for (const key of newOptions.keys()) {
      newOptions[key].selected = i === key && newOptions[key].value;
    }
    typeof props.onChange === 'function' && props.onChange(newOptions[i].value);
    setOptions(newOptions);
    setOpened(false);
  };

  const placeholder = () => {
    const selectedView = [];
    for (const option of [...options]) {
      option.selected && selectedView.push(option.label);
    }
    if (selectedView.length <= 0) {
      return props.placeholder;
    } else if (props.customLabel) {
      return props.customLabel;
    } else {
      return selectedView.join(',');
    }
  };

  return (
    <>
      {opened &&
        ReactDOM.createPortal(
          <SelectCard
            placement={placement}
            status={props.status}
            position={position}
          >
            <div
              className="overlay-pane"
              style={position && { ...position }}
              ref={overlayRef}
              onClick={e => e.stopPropagation()}
            >
              <Card style={{ width: targetRef.current.offsetWidth }}>
                <CardBody>
                  {options.map((option, index) => {
                    const className = [];
                    option.selected && className.push('selected');
                    option.disabled && className.push('disabled');
                    return props.multiple ? (
                      <Option
                        key={index}
                        className={className.join(' ')}
                        onClick={() => onSelectMultiple(index)}
                      >
                        <Checkbox checked={option.selected}>
                          {option.label}
                        </Checkbox>
                      </Option>
                    ) : (
                      <Option
                        key={index}
                        className={className.join(' ')}
                        onClick={() => onSelectHandle(index)}
                      >
                        {option.label}
                      </Option>
                    );
                  })}
                </CardBody>
              </Card>
            </div>
          </SelectCard>,
          document.getElementById('overlay-container')
        )}
      <SelectStyle {...props} opened={opened} placement={placement}>
        <button
          onClick={e => {
            e.stopPropagation();
            setOpened(!opened);
          }}
          ref={targetRef}
        >
          {placeholder()}
        </button>
      </SelectStyle>
    </>
  );
}
const defaultProps = {
  size: 'MD',
  status: 'Primary'
};

const propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.any,
      selected: PropTypes.bool,
      disabled: PropTypes.bool
    })
  ),
  eventListener: PropTypes.string,
  customLabel: PropTypes.string,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.any, PropTypes.array]),
  placeholder: PropTypes.any
};

Select.defaultProps = defaultProps;
Select.propTypes = { ...propTypes, ...buttonTypes };

export default Select;
