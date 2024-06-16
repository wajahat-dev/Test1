export const menuItemsData = [
    {
      label: 'New',
    //   leftIcon: <NewIcon />,
      callback: (event, item) => console.log('New clicked', event, item),
    },
    {
      label: 'Save',
    //   leftIcon: <SaveIcon />,
      callback: (event, item) => console.log('Save clicked', event, item),
    },
    {
      label: 'Save As',
    //   leftIcon: <FlutterDashIcon />,
      items: [
        {
          label: 'Option 1',
        //   rightIcon: <FlutterDashIcon />,
          callback: (event, item) => console.log('Save As > Option 1 clicked', event, item),
        },
        {
          label: 'Option 2',
        //   leftIcon: <AdbIcon />,
          callback: (event, item) => console.log('Save As > Option 2 clicked', event, item),
        },
      ],
    },
    {
      label: 'Export',
    //   leftIcon: <AdbIcon />,
    //   rightIcon: <AdbIcon />,
      items: [
        {
          label: 'File Type 1',
          items: [
            {
              label: 'Option 1',
            //   rightIcon: <FlutterDashIcon />,
              callback: (event, item) => console.log('Export > FT1 > O1 clicked', event, item),
            },
            {
              label: 'Option 2',
            //   leftIcon: <AdbIcon />,
              callback: (event, item) => console.log('Export > FT1 > O2 clicked', event, item),
            },
          ],
        },
        {
          label: 'File Type 2',
          callback: (event, item) => console.log('Export > FT2 clicked', event, item),
        },
      ],
    },
    {
      delay: 500,
      items: [
          {
              callback: (event, item) =>
                  console.log('Delay in ms to prevent blinking on hovering > I was delayed! clicked', event, item),
              label: 'I was delayed!',
          },
      ],
      label: 'Delay in ms to prevent blinking on hovering',
  },
  ]