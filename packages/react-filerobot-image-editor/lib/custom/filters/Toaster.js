import BaseFilters from"./BaseFilters";var SEPIA_CONST=.1,COLOR_FILTER_CONST=[255,145,0,.2];function Toaster(a){BaseFilters.apply(a,BaseFilters.sepia(SEPIA_CONST),BaseFilters.colorFilter(COLOR_FILTER_CONST))}Toaster.filterName="Toaster";export default Toaster;