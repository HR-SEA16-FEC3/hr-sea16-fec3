import React from 'react'
import { render, screen } from '@testing-library/react'
import Overview from '../Overview';
import Information from '../subcomponents/Information';
import InfoExample from '../product_info_example.json';

const { queryByTestId, findAllByTestId } = render(<Overview />);

describe('Overview Basic Tests', () => { // CONSOLIDATE THESE TESTS LATER

  it('Overview module should render', () => {
    expect(queryByTestId(/Overview/)).toBeTruthy();
  });

  it('Overview renders the Image Gallery module', () => {
    expect(screen.findByTestId(/Gallery/)).toBeTruthy();
  });

  it('Overview renders the Product Information module', () => {
    expect(screen.findByTestId(/Information/)).toBeTruthy();
  });

  it('Overview renders the Style Selector module', () => {
    expect(screen.findByTestId(/StylesList/)).toBeTruthy();
  });

  it('Overview renders the Add to Cart module', () => {
    expect(screen.findByTestId(/Cart/)).toBeTruthy();
  });

});

describe('Product Information Tests', () => {

  describe('Star Rating Tests', () => {

    it('Should always display a total of 5 stars', async () => {
      render(<Information infoList={InfoExample} />);
      const countStars = await screen.findAllByTestId('iconStar')
      expect(countStars).toHaveLength(5);
    });

    xit('Number of stars filled-in should correspond to the average rating rounded up to a quarter of a review point', () => {
      // if average is 3.8
      // should display as 3.75 solid stars
      // and 1.25 outlined stars
      expect().toBe();
    });

    xit('Display actual # of reviews in the link "Read all [#] reviews"', () => {
      expect().toBe();
    });

    xit('Clicking on "Read all [#] reviews" should scroll the page down to the Ratings & Reviews module', () => {
      expect().toBe();
    });

    xit('If there are no reviews, the entire Ratings & Reviews section should be hidden', () => {
      expect().toBe();
    });

  });

  describe('Price Tests', () => {

    xit('Should derive display price from style, and not the product', () => {
      expect().toBe();
    });

    xit('Should update display price with user\'s updates to style selected ', () => {
      expect().toBe();
    });

    xit('Should display sale price, if style is on sale', () => {
      //
      expect().toBe();
    });

    xit('Should display sale price in red text', () => {
      expect().toBe();
    });

    xit('Should display original price with strikethrough applied, after the sale price', () => {
      expect().toBe();
    });

  });

  describe('Product Overview Test', () => {

    xit('Should display free form text field if it exists for the product', () => {
      expect().toBe();
    });

  });

  describe('Share on Social Media Tests', () => {

    it('Should display icon to share this product on Facebook', () => {
      expect(screen.findByTestId('icon-facebook')).toBeTruthy();
    });

    it('Should display icon to share this product on Twitter', () => {
      expect(screen.findByTestId('icon-twitter')).toBeTruthy();
    });

    it('Should display icon to share this product on Pinterest', () => {
      expect(screen.findByTestId('icon-pinterest')).toBeTruthy();
    });

  });

});

describe('Style Selector Tests', () => {

  // Should display all styles for the current product at all times
  // Should have no limit to the number of styles a product can have
  // Should display thumbnails in rows of 4
  // Should display checkmark overlay on top of thumbnail for the currently selected style
  // Should display full name of selected style above thumbnail list
  // Should change to selected style if user clicks on a thumbnail displaying that style
  // Should have no impact if user clicks on the thumbnail for the currently selected style
  // Should display default style of the first style in the list
  // A product should always have at least one style
  // Only one style can be selected at a time
  // A style must be selected at all times

    xit('Should display all styles for the current product at all times', () => {
      expect().toBe();
    });
    xit('Should have no limit to the number of styles a product can have', () => {
      expect().toBe();
    });
    xit('Should display thumbnails in rows of 4', () => {
      expect().toBe();
    });
    xit('Should display checkmark overlay on top of thumbnail for the currently selected style', () => {
      expect().toBe();
    });
    xit('Should display full name of selected style above thumbnail list', () => {
      expect().toBe();
    });
    xit('Should change to selected style if user clicks on a thumbnail displaying that style', () => {
      expect().toBe();
    });
    xit('Should have no impact if user clicks on the thumbnail for the currently selected style', () => {
      expect().toBe();
    });
    xit('Should display default style of the first style in the list', () => {
      expect().toBe();
    });
    xit('A product should always have at least one style', () => {
      expect().toBe();
    });
    xit('Only one style can be selected at a time', () => {
      expect().toBe();
    });
    xit('A style must be selected at all times', () => {
      expect().toBe();
    });

});

describe('Add to Cart Tests', () => {

  xit('Render two dropdown selectors for Size and Quantity of item', () => {
    expect().toBe();
  });

  // Should only list sizes that are currently in stock for the style
  // Should not display size within list if size is not available
  // Should display the text "OUT OF STOCK" if no remaining stock for the current style
  // Should display inactive dropdown if no remaining stock for current style
  // Should show currently selected size when dropdown is collapsed
  // Should show "Select Size", by default, on dropdown

  describe('Size Selector Tests', () => {
    xit('Should list all available sizes for the currently selected style', () => {
      expect().toBe();
    });

    xit('Should only list sizes that are currently in stock for the style', () => {
      expect().toBe();
    });
    xit('Should not display size within list if size is not available', () => {
      expect().toBe();
    });
    xit('Should display the text "OUT OF STOCK" if no remaining stock for the current style', () => {
      expect().toBe();
    });
    xit('Should display inactive dropdown if no remaining stock for current style', () => {
      expect().toBe();
    });
    xit('Should show currently selected size when dropdown is collapsed', () => {
      expect().toBe();
    });
    xit('Should show "Select Size", by default, on dropdown', () => {
      expect().toBe();
    });

  });

  describe('Quantity Selector Tests', () => {

    // Should display sequence of integers ranging from 1 to the maximum as options in the dropdown
    // Should display maximum selection by either quantity of this style and size in stock, or hard limit of 15
    // Should display "-" and disable dropdown if size has not yet been selected
    // Should display 1 on the dropdown, by default, once a size has been selected

    xit('Should display sequence of integers ranging from 1 to the maximum as options in the dropdown', () => {
      expect().toBe();
    });

    xit('Should display maximum selection by either quantity of this style and size in stock, or hard limit of 15', () => {
      // expect tests:
      // For example, if the SKU for the selected product style and size has 4 units left in stock,
      // the dropdown will allow choice of 1, 2, 3 or 4.
      // However if there are 30 units in stock, the dropdown will only present from 1 to 15.
      expect().toBe();
    });

    xit('Should display "-" and disable dropdown if size has not yet been selected', () => {
      expect().toBe();
    });

    xit('Should display 1 on the dropdown, by default, once a size has been selected', () => {
      expect().toBe();
    });
  });

  describe('Add to Cart Button Tests', () => {

    // Should add style, size, and quantity of the product selected into the user's cart
    // A. If the default "Select Size" is currently selected,
    //   1. clicking on button should open the size dropdown
    //   2. a message should appear above the dropdown stating "Please select size"
    // B. If there is no stock, button should be hidden
    // C. If both valid size and valid quantity are selected, clicking on button will add the product to the user's cart

    xit('Should add style, size, and quantity of the product selected into the user\'s cart', () => {
      expect().toBe();
    });

    xit('If the default "Select Size" is currently selected, clicking on button should open the size dropdown', () => {
      expect().toBe();
    });

    xit('If the default "Select Size" is currently selected, a message should appear above the dropdown stating "Please select size"', () => {
      expect().toBe();
    });

    xit('If there is no stock, button should be hidden', () => {
      expect().toBe();
    });

    xit('If both valid size and valid quantity are selected, clicking on button will add the product to the user\'s cart', () => {
      expect().toBe();
    });

  });

  describe('Star Favorite Product Tests', () => { // LOCATE IN BUSINESS DOCUMENT
    xit('Should', () => {
      expect().toBe();
    });
  });

});

describe('Image Gallery Tests', () => {

  describe('Default View Tests', () => {

    // Should show only a single main image
    // Should show overlay of list of thumbnail images over main image
    // Should display first image in set, by default, as main image
    // Main image displayed should match the smaller thumbnail image shown first
    // When switching between styles, the index of the image currently selected should be maintained when the gallery updates for the new style
    // Clicking on any thumbnail should update the main image to match that shown in the thumbnail clicked
    // The thumbnail corresponding to the image currently selected as the main image should be highlighted to indicate the current selection
    // Clicking on the currently selected thumbnail will have no further effect
    // Should show up to 7 thumbnail images at a given time in the list
    // If more than 7 images are in the set for the style selected, the user should be able to scroll forward and backwards through the thumbnails
    // An arrow button pointing either direction should allow the customer to scroll through the remaining thumbnails in either direction
    // Customers should be able to change to the next or previous image in the set using forward and backwards arrow buttons appearing near the right and left edges of the image, respectively
    // Upon clicking the right or left arrow, the main image and the thumbnail highlighted should update
    // If upon navigating to the previous or next image using the arrows, the thumbnail corresponding to the now selected image is no longer visible, then the thumbnail list should scroll similarly such that the newly selected thumbnail is visible
    // If the user hovers over the main image anywhere other than the thumbnails, the left arrow, or the right arrow, the mouse icon should change to show a magnifying glass
    // If the user clicks on the image, the image gallery should change to the expanded view
    // If the first image is selected, the left arrow should not appear
    // If the last image is selected, the right arrow should not appear

    xit('Should show only a single main image', () => {
      expect().toBe();
    });
    xit('Should show overlay of list of thumbnail images over main image', () => {
      expect().toBe();
    });
    xit('Should display first image in set, by default, as main image', () => {
      expect().toBe();
    });
    xit('Main image displayed should match the smaller thumbnail image shown first', () => {
      expect().toBe();
    });
    xit('When switching between styles, the index of the image currently selected should be maintained when the gallery updates for the new style', () => {
      expect().toBe();
    });
    xit('Clicking on any thumbnail should update the main image to match that shown in the thumbnail clicked', () => {
      expect().toBe();
    });
    xit('The thumbnail corresponding to the image currently selected as the main image should be highlighted to indicate the current selection', () => {
      expect().toBe();
    });
    xit('Clicking on the currently selected thumbnail will have no further effect', () => {
      expect().toBe();
    });
    xit('Should show up to 7 thumbnail images at a given time in the list', () => {
      expect().toBe();
    });
    xit('If more than 7 images are in the set for the style selected, the user should be able to scroll forward and backwards through the thumbnails', () => {
      expect().toBe();
    });
    xit('An arrow button pointing either direction should allow the customer to scroll through the remaining thumbnails in either direction', () => {
      expect().toBe();
    });
    xit('Customers should be able to change to the next or previous image in the set using forward and backwards arrow buttons appearing near the right and left edges of the image, respectively', () => {
      expect().toBe();
    });
    xit('Upon clicking the right or left arrow, the main image and the thumbnail highlighted should update', () => {
      expect().toBe();
    });
    xit('If upon navigating to previous/next image using arrows, the thumbnail corresponding to the now selected image is no longer visible, then thumbnail list should scroll similarly such that the newly selected thumbnail is visible', () => {
      expect().toBe();
    });
    xit('If the user hovers over the main image anywhere other than the thumbnails, the left/right arrow, the mouse icon should change to show a magnifying glass', () => {
      expect().toBe();
    });
    xit('If the user clicks on the image, the image gallery should change to the expanded view', () => {
      expect().toBe();
    });
    xit('If the first image is selected, the left arrow should not appear', () => {
      expect().toBe();
    });
    xit('If the last image is selected, the right arrow should not appear', () => {
      expect().toBe();
    });

  });

  describe('Expanded View Tests', () => {

    // The expanded view of the image gallery should overlay the rest of the item detail page
    // Should display a main image and will span the entire screen
    // The main image offer right and left arrows, which will have the same function of scrolling through the image set
    // In the expanded view, thumbnails will not appear over the main image
    // Instead, icons indicating each image in the set will appear.
    // These icons will be much smaller, but will have the same functionality in that clicking on them will skip to that image in the set.
    // Additionally the icon for the currently selected image will be distinguishably different from the rest.
    // In the default view, clicking on the image would open the expanded view.
    // In the expanded view, however, clicking on the main image will zoom the image by 2.5 times.
    // Instead of displaying a magnifying glass on hover, in the expanded view the mouse should become a “+” symbol while hovering over the main image.
    // After clicking, the zoomed image will be too large to display in the space provided.
    //   In this case, the portion of the image shown within the window should correspond to the current mouse position relative to the screen.
    //   For example, by moving the mouse right the portion of the zoomed image shown should pan to the right.
    // Furthermore, the position of the mouse relative to the centering of the zoomed image should be proportional.
    // If the mouse is all the way in the bottom left corner of the expanded image gallery window, the bottom left corner of the zoomed image should be displayed.
    // Moving the mouse to the top right should smoothly move the zoomed image available such until the top right of the image is displayed.
    // While the image is zoomed, no arrow buttons or thumbnail selection icons will be available.
    // The mouse should display as a “-” symbol.
    // Upon clicking the image in this state, the user should be returned to the normal expanded image gallery view.

    xit('Should', () => {
      expect().toBe();
    });

  });

});

// Axios-related test: https://www.smashingmagazine.com/2020/07/react-apps-testing-library/

// test('Test', () => { /* assertions */ }); // test template

// describe('', () => {
//   xit('Should ', () => {
//     expect().toBe();
//   });
// });