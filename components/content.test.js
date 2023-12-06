/**
 *  @vitest-environment happy-dom
 */

import { render, getByTestId } from '@testing-library/vue';
import { describe, test, vi } from 'vitest'
import { mount } from "@vue/test-utils";
import { setup, $fetch } from '@nuxt/test-utils'
import  IndexContent from './content.vue'


let globalWrapper;
globalWrapper = mount(IndexContent);

//Setting env variables
/* WON'T WORK UNTIL THIS IS COMPLETED
https://github.com/nuxt/test-utils/issues/349
https://github.com/nuxt/test-utils/issues/297
vi.mock('#imports', () => {
  return {
    useRuntimeConfig() {
      return {
        public: {
          running_mode:'TESTING',
        }
      }
    }
  }
})


globalThis.useRuntimeConfig = () => {
  return {
    public: {
      running_mode: 'TESTING'
    },
  };
};
*/

//Hooks to create and clean up component instances between each test run
beforeEach(() => {
  //Mount component
  globalWrapper = mount(IndexContent);

});
afterEach(() => {
  //Unmount component
  globalWrapper.unmount();
});


describe("[unit] finding rendered text", () => {
  //Check if the initial rendered text is shown correctly when rendered
  test('initial rendered title text', () => {
    //Rendering the component
    const { getByText } = render(IndexContent);

    //Get the span element by the text ("TODO List (0)")
    const spanElement = getByText('TODO List (0)');

    //Assert that the text content of the span is equal to "TODO List (0)"
    expect(spanElement.textContent).toBe('TODO List (0)');
  });

  //Checks for todo box test being present after creating the box
  test('todo box text after clicking button', async ()  => {
    //Rendering the component
    const { getByText, container } = render(IndexContent);

    //Get the button element by its ID
    const buttonTestId = 'new-todo';
    const buttonElement = getByTestId(container, buttonTestId);

    //Emulate click
    buttonElement.click();

    //Get the span element by the text ("Description 0")
    const spanElement = getByText('Description 0');

    //Assert that the text content of the span is equal to "Description 0"
    expect(spanElement.textContent).toBe('Description 0');
  });
})


//Check if main button is found in the component's DOM
test('[unit] main button presence', () => {
  //Rendering the component
  const wrapper = globalWrapper;

  //Find the button via ID
  const button = wrapper.find('#new-todo');

  //Check if the button was found
  expect(button.exists()).toBe(true);
});

//Check if the main click is running a function
test('[unit] button click detect', () => {
  //Rendering the component
  const wrapper = globalWrapper;

  //Set up component spy
  const spy = vi.spyOn(wrapper.vm, 'executeMainFunction');
  //const spy = vi.spyOn(IndexContent.methods, 'newToDoClicked')
  //const spy = (wrapper.vm.newToDoClicked = vi.fn());

  //Find the button via ID
  const button = wrapper.find('#new-todo');
  button.trigger('click');

  //Check if expected function was run
  expect(spy).toHaveBeenCalled();
  //expect(wrapper.vm.newToDoClicked).toHaveBeenCalled();
});

//Check if the component's data is changing properly
test('[unit] changing data state', () => {
  //modified state
  var tempWrapper = mount(IndexContent, {
    data() {
      return {
        localLength: 10,
      }
    }
  })
  expect(tempWrapper.html()).toContain('TODO List (10)');

  //revert back to default state
  var tempWrapper = mount(IndexContent, {
    data() {
      return {
        localLength: 0,
      }
    }
  })
  expect(tempWrapper.html()).toContain('TODO List (0)');
});

//Check if the function adding a new box starts running correctly 
//We are testing to see if the function is being imported properly
test('[integration] running add todo box', () => {
  it('New Todo box add function running', async () => {
    //Rendering the component
    const wrapper = globalWrapper;

    //Capture console logs
    console.log = vi.fn()

    //Find the button via ID
    const button = wrapper.find('#new-todo');
    await button.trigger('click');

    //Check if the function was reached and the log only came up once
    expect(console.log).toHaveBeenLastCalledWith("Running Add Todo Box");
    expect(console.log).toHaveBeenCalledTimes(1);
  });
});


/*
//Search for TODO List (2) as we clicked the button to add boxes twice in the other tests
test('[Visual] Todo Box Added', () => {
  it('Box found', async () => {
    //Rendering the component
    const { getByText, container } = render(IndexContent);

    //Get the button element by its ID
    const buttonTestId = 'new-todo';

    //Find the button via ID
    const buttonElement = getByTestId(container, buttonTestId);
    buttonElement.click();

    //Get the span element by the text ("TODO List (2)")
    const spanElement = getByText('Description 0');

    //Assert that the text content of the span is equal to "TODO List (2)"
    expect(spanElement.textContent).toBe('Description 0');
  });
});
*/

/*
describe('[Logic] Storage Test', () => {
  it('JSON Storage correctly displaying added boxes', async () => {
    //Rendering the component
    const { getByText } = render(IndexContent);

    // Get the span element by its class
    const spanElement = getByText('TODO List ');

    // Assert that the text content of the span is equal to "Hello World"
    expect(spanElement.textContent).toBe('Hello World');
  });
});
*/
