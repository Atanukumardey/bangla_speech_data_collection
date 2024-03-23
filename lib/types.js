import PropTypes from 'prop-types';

export const FilteredUser = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
  verified: PropTypes.bool,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
});

export const UserResponse = PropTypes.shape({
  status: PropTypes.string,
  data: PropTypes.shape({
    user: FilteredUser,
  }),
});

export const UserLoginResponse = PropTypes.shape({
  status: PropTypes.string,
  token: PropTypes.string,
});