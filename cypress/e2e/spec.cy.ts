// import { composeStories } from '@storybook/testing-react'
// import * as stories from './../../src/stories/Toast.stories'
// import { mount } from "@cypress/react";
//
// const { ToastExample } = composeStories(stories)

describe('Storybook Toast story', () => {
  it('story is open', () => {
    cy
      .visit('http://localhost:6006/?path=/story/project-components-toast--toast-example')
  })
  // it('story Toast is mount', () => {
  //   mount(typeof ToastExample)
  // })
})

describe('Storybook ToastListPortal story', () => {
  it('story is open', () => {
    cy
      .visit('http://localhost:6006/?path=/story/project-components-toastportal--toast-list-portal-example')
  })
})
