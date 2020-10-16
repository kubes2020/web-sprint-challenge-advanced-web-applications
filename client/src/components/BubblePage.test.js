import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchColors as mockFetchColors } from "./api/fetchColors";

// const mockData = [{"color":"lilac","code":{"hex":"#9a99dd"},"id":5},{"color":"softpink","code":{"hex":"#dd99ba"},"id":6},{"color":"bisque","code":{"hex":"#dd9a99"},"id":7},{"color":"softyellow","code":{"hex":"#dcdd99"},"id":8},{"color":"blanchedalmond","code":{"hex":"#ffebcd"},"id":9},{"color":"blue","code":{"hex":"#6093ca"},"id":10},{"color":"blueviolet","code":{"hex":"#8a2be2"},"id":11}]
const mockData = {data:[
  {
    color: 'lilac',
    code: {
      hex: '#9a99dd'
    },
    id: 5
  },
  {
    color: 'softpink',
    code: {
      hex: '#dd99ba'
    },
    id: 6
  },
  {
    color: 'bisque',
    code: {
      hex: '#dd9a99'
    },
    id: 7
  },
  {
    color: 'softyellow',
    code: {
      hex: '#dcdd99'
    },
    id: 8
  },
  {
    color: 'blanchedalmond',
    code: {
      hex: '#ffebcd'
    },
    id: 9
  },
  {
    color: 'blue',
    code: {
      hex: '#6093ca'
    },
    id: 10
  },
  {
    color: 'blueviolet',
    code: {
      hex: '#8a2be2'
    },
    id: 11
  }
]
}
jest.mock("./api/fetchColors")

test("Fetches data and renders the bubbles", async () => {
  mockFetchColors.mockResolvedValueOnce(mockData)
  render(<BubblePage/>)

  // const color = await screen.getByText(/bubbles/i)
  await waitFor(()=>{
    expect(screen.getAllByText(/x/i)).toHaveLength(7)
  })

//FYI - BubblePage has Bubbles.js and ColorList.js rendering through it, test still works because it's a parent component which renders all children

//These didn't work
  // await waitFor(()=> {expect(color).toHaveLength(7) })
  // const color = await screen.findAllByTestId(/test/i)
  // const color = await screen.findAllByText(/color/i)
  // expect(color).toHaveLength(7)
});
