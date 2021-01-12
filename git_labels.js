/**
 * Labels with colors in HEX, name and description
 */
const labels = [
  // STORY POINTS
  {
    name: 'point: 0',
    color: '#228ab5',
    description: 'Story point 0'
  },
  {
    name: 'point: 1',
    color: '#227fb5',
    description: 'Story point 1'
  },
  {
    name: 'point: 2',
    color: '#2274b5',
    description: 'Story point 2'
  },
  {
    name: 'point: 3',
    color: '#2269b5',
    description: 'Story point 3'
  },
  {
    name: 'point: 5',
    color: '#225eb5',
    description: 'Story point 5'
  },
  {
    name: 'point: 8',
    color: '#2253b5',
    description: 'Story point 8'
  },
  {
    name: 'point: 13',
    color: '#2248b5',
    description: 'Story point 13'
  },
  {
    name: 'point: 21',
    color: '#2238b5',
    description: 'Story point 21'
  },
  // ISSUING
  {
    name: 'bug',
    color: '#ff0000',
    description: 'This is a bug'
  },
  {
    name: 'performance',
    color: '#CF704F',
    description: 'The app is not performing as expected'
  },
  {
    name: 'chore',
    color: '#056D05',
    description: 'Tedious, but necessary task'
  },
  {
    name: 'feature',
    color: '#55FF55',
    description: 'A new feature we need to add'
  },
  {
    name: 'infastructure',
    color: '#7331D4',
    description: 'Code, work, cloud infastructure related'
  },
  {
    name: 'refactor',
    color: '#b9e4e6',
    description: 'We need to refactor, this is not '
  },
  {
    name: 'test',
    color: '#C8D426',
    description: 'A test is needed!'
  },
  // PRIORITY
  {
    name: 'priority: low',
    color: '#2800F2',
    description: 'Low priority'
  },
  {
    name: 'priority: medium',
    color: '#c04520',
    description: 'Medium priority'
  },
  {
    name: 'priority: high',
    color: '#FF5555',
    description: 'High priority, needs immediate response'
  },
  // OTHER TASKS
  {
    name: 'documentation',
    color: '#cd05fe',
    description: 'This needs documentation'
  }
]

// Set to true if old labels should be deleted first
const deleteLabels = false

async function doLabelsWork() {
  if (deleteLabels) await deleteAllLabels()
  for (const label of labels) {
    await addOrUpdateLabel(label, false)
  }
}

/**
 * Updates a label with new colors/description if it finds a label with
 * the same name in labels list
 * @param {object} label labels to update
 */
async function updateLabel(label) {
  var flag = false
  ;[].slice.call(document.querySelectorAll('.js-labels-list-item')).forEach(function (element) {
    if (element.querySelector('.js-label-link').textContent.trim() === label.name) {
      flag = true
      element.querySelector('.js-edit-label').click()
      element.querySelector('.js-new-label-name-input').value = label.name
      element.querySelector('.js-new-label-description-input').value = label.description
      element.querySelector('.js-new-label-color-input').value = label.color
      element.querySelector('.js-edit-label-cancel ~ .btn-primary').click()
    }
  })
  await sleep(100)
  return flag
}

/**
 * Adds a new label to the label page
 *
 * @param {object} label the label to add
 */
async function addNewLabel(label) {
  document.querySelector('.js-new-label-name-input').value = label.name
  document.querySelector('.js-new-label-description-input').value = label.description
  document.querySelector('.js-new-label-color-input').value = label.color
  document.querySelector('.js-details-target ~ .btn-primary').disabled = false
  document.querySelector('.js-details-target ~ .btn-primary').click()
  await sleep(100)
}

/**
 * Promise that resolves after X milliseconds
 * @param {int} ms time in milliseconds
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Deletes all the pages in the labels page
 */
async function deleteAllLabels() {
  var labels = document.querySelectorAll('.js-labels-list-item')
  for (const label of labels) {
    label.querySelector('form').submit()
    await sleep(100)
  }
  return await sleep(500)
}

/**
 * Adds a new
 * @param {object} label the label to add/update
 */
async function addOrUpdateLabel(label) {
  if (!(await updateLabel(label))) await addNewLabel(label)
}

await doLabelsWork()
