// <!-- ********************* Do Now ******************** -->
// [x] pass the updatePrimaryFilter function down from index to Primary filter btns

// [x] change new mwr for to default to lowerCase undefined
// [x] apply css classNames to updatePrimaryFilter funtion

// [x] make request # on details modal = mwr id
// [x] change details status to lowerCase and 
// [x] what you want primary filters to be.
// [X] details screen undefiened needs to be -
//         - problem type, assigned to, maint. team member, assistant

// [x] why is prob/col in details a lighter text than other disabled fields?
[x] color in stylesheet needed set to black

// [] mwr types in details dropdown not lowercase. is it updating as lowercase?

// [] organize details modal
//         [] get rid of project #?
//         [] get rid of problem type? ideas: electrical, plumbing,...?
// [] job status on own row at top of mantenence section
// [] due date setion move below assigned section
// [] brief/work discriptions move under department / site section

// [] take awway white text color on mwr for close button. Just pointer on hover is needed

// [] get rid of input box border/shadows

// [] make dropdowns box the same height as input boxes

// [] focus color on input boxes

// [] change table hover color to part of color scheme
//         [] make all colors hue be linked to main settings mwr colors. So they will match if colors changed

// [] clean out mwrForm fields and db fields to match and use just what is needed
// <!-- ***********************Do later******************** -->

// [] close all modals by clicking outside of modal

// <!-- ***********************Do sometime******************* -->

// [] settings page
//         [] gear icon somewhere to open settings

// [] seperate and import states into idex from their own file

// [] does my use case for useEffect neeed cleanup?

// [] need auth to edit details modal


// ******************************************************************************************
// details modale
// [] make close = exit w/o save
// [] asyc save and then generate pdf


// <!-- Context progress -->
// [] new mwr from context dispatch
// [] update from context dispatch
// [] delete from context dispatch
// [] clean up all un-needed props

// <!-- React context in Gatsby high overview -->
// we are wrapping root with the PROVIDER and its context data via the value prop
// we can read the providers data inside any component with the context.consumer

// <!-- context is a object that has two methods: provider, consumer. Both are components -->
//  You can either use the consumer component directly or the useContext hook, depending on which pattern you prefer.
//   *one or the other* hook seems the way to go

// <!-- wrapping root in gatsby browser & ssr files -->
// This lets the global state we set up persist throughout refreshes and page changes. Equivalent to wrapping the App components in plain React

// <!-- useReducer -->
// in our globalContextProvider that we wrap gatsby with:
// - we will make two variables [state, dispatch] with passing our reducer "dispatch" function and outr initial state into React.useReducer

// <!-- consuming component -->
// - import our dispatch and state context from our file
// - make dispatch and state variables using useContext()
// - using dispatch reducer function
//   - onclick={() => {dispatch({type: "ACTION"})}}
//   - just passing the type action into the dispatch to use in it's switch statement