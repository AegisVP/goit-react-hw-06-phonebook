import React from 'react';
import { Box } from 'components/Common/Box.styled';
import { Button, Label, InputField } from 'components/Filter/Filter.styled';
// import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { searchFilter } from 'redux/sliceFilter';

export const FilterForm = () => {
  const filter = useSelector(store => store.contacts?.filter);
  const dispatch = useDispatch();

  return (
    <Box display="flex" flexDirection="column" my="10px" p="0" border="1px solid #888888" borderRadius="2px">
      <Label htmlFor="contactFIlter">
        Filter
        {filter.search.length > 0 && (
          <Button type="button" onClick={() => dispatch(searchFilter(''))}>
            ❌
          </Button>
        )}
      </Label>
      <InputField
        id="contactFIlter"
        onChange={e => dispatch(searchFilter(e.currentTarget.value))}
        type="text"
        name="filter"
        value={filter.search}
      />
    </Box>
  );
};

// FilterForm.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   filterValue: PropTypes.string,
//   onClear: PropTypes.func.isRequired,
// };
