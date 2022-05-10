const setUser = (userInfo) => {
  return {
    type: `SET_USER`,
    userInfo
  }
}

const setNotes = (notes) => {
  return {
    type: `SET_NOTES`,
    notes
  }
}

const setValue = (e, heading, leftLabel, rightLabel) => {
  return {
    type: `SET_VALUE`,
    valueInfo: e,
    heading,
    leftLabel,
    rightLabel
  }
}

const setTestInput = (inputName, inputValue, inputType) => {
  return {
    type: `SET_TEST_INPUT`,
    inputName,
    inputValue,
    inputType
  }
}

const initializeMenu = (drupalMenu) => {
  return {
    type: `INITIALIZE`,
    drupalMenu
  }
}

const setNewCurrent = (path) => {
  return {
    type: `SET_NEW_CURRENT`,
    path
  }
}

const triggerModal = () => {
  return {
    type: `TRIGGER_MODAL`,
  }
}

const advance = () => {
  return {
    type: `ADVANCE`,
  }
}

const retreat = () => {
  return {
    type: `RETREAT`,
  }
}

const isCurrent = (item) => {
  return {
    type: `IS_CURRENT`,
    item
  }
}

const adminLogin = (submitted) => {
  return {
    type: `ADMIN_LOGIN`,
    submitted
  }
}

const logout = () => {
  return {
    type: `LOGOUT`
  }
}


export { 
  setUser, 
  setNotes,
  setValue, 
  setTestInput, 
  initializeMenu, 
  advance, 
  retreat, 
  setNewCurrent, 
  triggerModal,
  adminLogin,
  logout
};
